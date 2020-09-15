import React, { useEffect, useState } from "react"

const ModeSwitch = () => {

  const getLocalStorage = () => localStorage.getItem('mode') || 'light'

  const [ mode, setMode ] = useState(getLocalStorage)

  const hanleModeChange = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"))
  }

  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="activate"
        checked={mode === 'dark'}
        onChange={hanleModeChange}
      />
      <label className="form-check-label" htmlFor="activate">
        Mode Sombre
      </label>
    </div>
  )
}

export default ModeSwitch