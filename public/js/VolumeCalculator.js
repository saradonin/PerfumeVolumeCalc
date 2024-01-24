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
    const [style, ] = useState({
        inputStyle: {width: 120},
        containerStyle: {width: 320}
    })
    const [classNames, ] = useState({
        row: "form-group row mb-3 justify-content-between align-items-center",
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
            setError("Current weight too high.")
            return
        }
        if (resultVolume < 0) {
            setError("Current weight too low.")
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
        setError("")
    }


    return (
        <>
            <div className="container-sm" style={style.containerStyle}>

                <form>
                    <div className={classNames.row}>
                        <h5 className="text-center">Perfume volume calculator</h5>
                    </div>

                    <div className="form-group row mb-2 text-danger">
                        <div className="col-auto">
                            {error && <p>{error}</p>}
                            {error && <p>Please fill in the form correctly.</p>}
                        </div>
                    </div>

                    <div className={classNames.row}>
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

                    <div className={classNames.row}>
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

                    <div className={classNames.row}>
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

                    <div className={classNames.row}>
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

                    <div className={classNames.row}>
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

                    <div className={classNames.row}>
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