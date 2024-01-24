import React, {useState} from "react";

const VolumeCalculator = () => {

    const [form, setForm] = useState({
        initialVolume: "",
        initialWeight: "",
        currentWeight: "",
        currentVolume: "",
        density: 0.84
    })
    const [error, setError] = useState("")
    const [style, setStyle] = useState({
        inputStyle: {width: 125},
        containerStyle: {width: 360}
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleResult = (e) => {
        e.preventDefault()
        const resultVolume = form.initialVolume - ((form.initialWeight - form.currentWeight) / form.density).toFixed(2)

        if (form.currentWeight > form.initialWeight) {
            setError("Please fill in the form correctly.")
            return
        }
        if (resultVolume < 0) {
            setError("Please fill in the form correctly.")
            return
        }
        setForm(prevState => ({
            ...prevState,
            currentVolume: resultVolume
        }))
    }

    const handleReset = (e) => {
        e.preventDefault()
        setForm({
            initialVolume: "",
            initialWeight: "",
            currentWeight: "",
            currentVolume: "",
            density: 0.84
        })
    }


    return (
        <>
            <div className="container-sm border shadow p-4 pb-0" style={style.containerStyle}>

                <form>
                    <div className="form-group row mb-3 justify-content-between align-items-center">
                        <h5 className="text-center">Perfume volume calculator</h5>
                    </div>

                    <div className="form-group row mb-2 text-danger">
                        <div className="col-auto">
                            {error}
                        </div>
                    </div>

                    <div className="form-group row mb-3 justify-content-between align-items-center">
                        <div className="col-auto">
                            <label className="form-label">Initial volume [ml]</label>
                        </div>
                        <div className="col-auto">
                            <input type="number"
                                   step="0.01"
                                   className="form-control"
                                   name={"initialVolume"}
                                   style={style.inputStyle}
                                   value={form.initialVolume}
                                   onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mb-3 justify-content-between align-items-center">
                        <div className="col-auto">
                            <label>Initial weight [g]</label>
                        </div>
                        <div className="col-auto">
                            <input type="number"
                                   step="0.01"
                                   className="form-control"
                                   name={"initialWeight"}
                                   style={style.inputStyle}
                                   value={form.initialWeight}
                                   onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mb-3 justify-content-between align-items-center">
                        <div className="col-auto">
                            <label>Current weight [g]</label>
                        </div>
                        <div className="col-auto">
                            <input type="number"
                                   step="0.01"
                                   className="form-control"
                                   name={"currentWeight"}
                                   style={style.inputStyle}
                                   value={form.currentWeight}
                                   onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mb-3 justify-content-between align-items-center">
                        <div className="col-auto">
                            <label>Density [g/ml]</label>
                        </div>
                        <div className="col-auto">
                            <input type="number"
                                   step="0.01"
                                   className="form-control"
                                   name={"density"}
                                   style={style.inputStyle}
                                   value={form.density}
                                   onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mb-3 justify-content-between align-items-center">
                        <div className="col-auto">
                            <label>Current volume [ml]</label>
                        </div>
                        <div className="col-auto">
                            <input type="text"
                                   className="form-control fw-bold"
                                   name={"currentVolume"}
                                   style={style.inputStyle}
                                   value={form.currentVolume} disabled readOnly/>
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <div className="col-xs-2 d-flex justify-content-between align-items-center">
                            <button className="btn btn-outline-secondary mb-3"
                                    style={style.inputStyle}
                                    onClick={handleReset}>
                                Reset
                            </button>
                            <button className="btn btn-outline-primary mb-3"
                                    style={style.inputStyle}
                                    onClick={handleResult}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default VolumeCalculator