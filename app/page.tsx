'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = '/lagos'
  }, [])
  return <p style={{padding:20}}>Loading Lagos game... 🔥</p>
}