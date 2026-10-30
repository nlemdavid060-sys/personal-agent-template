"use client";
import { useState } from "react";

const PACKS = [
  { id: "mushin", name: "Mushin Street Hustler", coins: "50B", desc: "Danfo hustle, face-me-I-face-you" },
  { id: "balogun", name: "Balogun Market Boss", coins: "400B", desc: "2 shops for Balogun" },
  { id: "computer", name: "Computer Village Tech Boy", coins: "700B", desc: "Phone repair shop for Ikeja" },
  { id: "lekki", name: "Lekki Big Boy", coins: "1 Trillion", desc: "Mansion for Lekki, heavy bills" },
];

export default function LagosLife() {
  const [selected, setSelected] = useState("lekki");
  const [started, setStarted] = useState(false);
  
  if (started) {
    return (
      <div style={{minHeight:'100vh', padding:20, textAlign:'center'}}>
        <h1>Welcome to Lagos! 🇳🇬</h1>
        <p>You start with {PACKS.find(p=>p.id===selected)?.coins} GAME COINS</p>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:20}}>
          <button style={{background:'white', padding:20, borderRadius:10}}>🚌 Danfo Job</button>
          <button style={{background:'white', padding:20, borderRadius:10}}>📱 Computer Village</button>
          <button style={{background:'white', padding:20, borderRadius:10}}>👗 Balogun Market</button>
          <button style={{background:'white', padding:20, borderRadius:10}}>🏖️ Lekki Beach</button>
        </div>
        <p style={{fontSize:10, color:'gray', marginTop:20}}>All balances are GAME COINS ONLY - Not real money</p>
      </div>
    );
  }

  return (
    <div style={{minHeight:'100vh', background:'#f1f5f9', display:'flex', justifyContent:'center'}}>
      <div style={{width:'100%', maxWidth:420, background:'white', minHeight:'100vh', padding:24}}>
        <div style={{background:'#fef3c7', textAlign:'center', fontSize:12, fontWeight:'bold', padding:'8px 12px', borderRadius:999, margin:'0 auto', width:'fit-content'}}>
          🛡️ GAME COINS ONLY - Not Real Money
        </div>
        <div style={{textAlign:'center', marginTop:24, fontSize:48}}>🎁</div>
        <h1 style={{fontSize:28, fontWeight:900, textAlign:'center', marginTop:16}}>Choose Your Street</h1>
        <p style={{textAlign:'center', color:'gray'}}>Start Your Lagos Story</p>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:24}}>
          {PACKS.map(p => (
            <button key={p.id} onClick={()=>setSelected(p.id)}
              style={{padding:16, borderRadius:16, border: selected===p.id?'2px solid #16a34a':'2px solid #f1f5f9', textAlign:'left', background: selected===p.id?'#f0fdf4':'white'}}>
              <div style={{fontWeight:'bold', fontSize:13}}>{p.name}</div>
              <div style={{color:'#16a34a', fontWeight:'bold', marginTop:8}}>{p.coins} Game Coins</div>
              <div style={{fontSize:10, color:'gray', marginTop:4}}>{p.desc}</div>
            </button>
          ))}
        </div>

        <button onClick={()=>setStarted(true)}
          style={{width:'100%', background:'#16a34a', color:'white', fontWeight:'bold', padding:16, borderRadius:16, marginTop:24}}>
          Start Hustle & Continue
        </button>
      </div>
    </div>
  );
                                 }
