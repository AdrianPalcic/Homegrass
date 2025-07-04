import { writeFileSync } from 'fs'
import axios from 'axios'  // Promijenjeno sa { get } na default import
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function generateSitemap() {
    try {
        // 1. Dohvati podatke iz WordPress API-ja
        const [proizvodi, projekti] = await Promise.all([
            axios.get('https://artificialgrass.hr/homegrass.hr/cms/wp-json/wp/v2/proizvod'),  // Dodano axios.
            axios.get('https://artificialgrass.hr/homegrass.hr/cms/wp-json/wp/v2/projekt')    // Dodano axios.
        ])

        // 2. Generiraj XML
        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://homegrass.hr/</loc><priority>1.0</priority></url>
  <url><loc>https://homegrass.hr/onama</loc><priority>0.9</priority></url>
  <url><loc>https://homegrass.hr/kontakt</loc><priority>0.8</priority></url>
  <url><loc>https://homegrass.hr/proizvodi</loc><priority>0.8</priority></url>
  <url><loc>https://homegrass.hr/projekti</loc><priority>0.8</priority></url>
  <url><loc>https://homegrass.hr/vodic</loc><priority>0.8</priority></url>
  <url><loc>https://homegrass.hr/hvala</loc><priority>0.5</priority></url>
  <url><loc>https://homegrass.hr/kolacici</loc><priority>0.4</priority></url>
  <url><loc>https://homegrass.hr/uvjeti</loc><priority>0.3</priority></url>
  <url><loc>https://homegrass.hr/privacy</loc><priority>0.2</priority></url>`

        // 3. Dodaj proizvode
        proizvodi.data.forEach(proizvod => {
            xml += `
  <url>
    <loc>https://homegrass.hr/proizvod/${proizvod.id}</loc>
    <lastmod>${new Date(proizvod.modified_gmt).toISOString()}</lastmod>
    <priority>0.7</priority>
  </url>`
        })

        // 4. Dodaj projekte
        projekti.data.forEach(projekt => {
            xml += `
  <url>
    <loc>https://homegrass.hr/projekt/${projekt.id}</loc>
    <lastmod>${new Date(projekt.modified_gmt).toISOString()}</lastmod>
    <priority>0.7</priority>
  </url>`
        })

        xml += '\n</urlset>'

        // 5. Spremi u public/sitemap.xml
        writeFileSync(resolve(__dirname, '../../public/sitemap.xml'), xml)
        console.log('✅ Sitemap uspješno generiran')

    } catch (error) {
        console.error('❌ Greška pri generiranju sitemapa:', error.message)
        process.exit(1)
    }
}

generateSitemap()