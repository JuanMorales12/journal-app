import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'
import { initPath } from '../../../config'

export const JournalRoutes = () => {
  return (
    <Routes >
        <Route path="/" element={<JournalPage />} />
        <Route path="/*" element={<Navigate to={`${initPath}/`} />} />
    </Routes>
  )
}
