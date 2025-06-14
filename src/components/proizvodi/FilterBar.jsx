import React from 'react'
import FormButton from '../buttons/FormButton'
import FormButtonSecondary from '../buttons/FormButtonSecondary'
import Modal from './Modal'

const FilterBar = ({ isModal, setModal }) => {

    return (
        <>
            {/* Main filterbar (can hide on small screens if needed) */}
            <div className="filterbar">
                <h3>Filtriraj Proizvode</h3>
                <form>
                    <div className="leftoright">
                        <label htmlFor="debljina-32mm">
                            <input type="checkbox" name="debljina 32mm" id="debljina-32mm" />
                            Debljina 32mm <span>(2)</span>
                        </label>
                        <label htmlFor="debljina-42mm">
                            <input type="checkbox" name="debljina 42mm" id="debljina-42mm" />
                            Debljina 42mm <span>(3)</span>
                        </label>
                    </div>

                    <h4>Namjena</h4>
                    <div className="leftoright">
                        <label htmlFor="vrt">
                            <input type="checkbox" name="Vrt" id="vrt" />
                            Vrt
                        </label>
                        <label htmlFor="igralište">
                            <input type="checkbox" name="Igralište" id="igralište" />
                            Igralište
                        </label>
                        <label htmlFor="balkon-1">
                            <input type="checkbox" name="balkon" id="balkon-1" />
                            Balkon
                        </label>
                    </div>

                    <h4>Duljina vlasi</h4>
                    <div className="leftoright">
                        <label htmlFor="balkon-2">
                            <input type="checkbox" name="balkon" id="balkon-2" />
                            Balkon
                        </label>
                        <label htmlFor="balkon-3">
                            <input type="checkbox" name="balkon" id="balkon-3" />
                            Balkon
                        </label>
                    </div>

                    <div className="buttons">
                        <FormButton text="Primjeni" />
                        <FormButtonSecondary text="Resetiraj" />
                    </div>
                </form>
            </div>

            <Modal isOpen={isModal} onClose={() => setModal(false)}>
                <div className="filterbar">
                    <div className="filterbar">
                        <h3>Filtriraj Proizvode</h3>
                        <form>
                            <div className="leftoright">
                                <label htmlFor="debljina-32mm">
                                    <input type="checkbox" name="debljina 32mm" id="debljina-32mm" />
                                    Debljina 32mm <span>(2)</span>
                                </label>
                                <label htmlFor="debljina-42mm">
                                    <input type="checkbox" name="debljina 42mm" id="debljina-42mm" />
                                    Debljina 42mm <span>(3)</span>
                                </label>
                            </div>

                            <h4>Namjena</h4>
                            <div className="leftoright">
                                <label htmlFor="vrt">
                                    <input type="checkbox" name="Vrt" id="vrt" />
                                    Vrt
                                </label>
                                <label htmlFor="igralište">
                                    <input type="checkbox" name="Igralište" id="igralište" />
                                    Igralište
                                </label>
                                <label htmlFor="balkon-1">
                                    <input type="checkbox" name="balkon" id="balkon-1" />
                                    Balkon
                                </label>
                            </div>

                            <h4>Duljina vlasi</h4>
                            <div className="leftoright">
                                <label htmlFor="balkon-2">
                                    <input type="checkbox" name="balkon" id="balkon-2" />
                                    Balkon
                                </label>
                                <label htmlFor="balkon-3">
                                    <input type="checkbox" name="balkon" id="balkon-3" />
                                    Balkon
                                </label>
                            </div>

                            <div className="buttons">
                                <FormButton text="Primjeni" />
                                <FormButtonSecondary text="Resetiraj" />
                            </div>
                        </form>
                    </div>                </div>
            </Modal>
        </>
    )
}

export default FilterBar
