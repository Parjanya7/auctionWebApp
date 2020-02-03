import React from 'react';
import logo from '../Group 3.svg';
import twitter from '../twitter.png';
import fb from '../fb.png';
import insta from '../insta.png';

const FooterBar = () => {
    return (
        <div>
        <div style = {{backgroundColor:'#F1F2F4', width:'100%', height:'20rem',marginTop:'5rem',display:'flex'}}>
            <div style = {{textAlign:'center', width:'16.5%'}}>
                <img src = {logo} style = {{ marginTop:'3rem',cursor:'pointer'}}/>
            </div>
            <div style = {{marginTop:'2rem', marginLeft:'8rem'}}>
                <h4 style = {{fontWeight:'600',cursor:'pointer'}}>
                    Company
                </h4>
                <t style = {{fontSize:'14px', color:'gray',cursor:'pointer'}}>About</t><br/><br/>
                <t style = {{fontSize:'14px',color:'gray',cursor:'pointer'}}>FAQs</t><br/><br/>
                <t style = {{fontSize:'14px',color:'gray',cursor:'pointer'}}>Sign Up</t><br/><br/>
            </div>
            <div style = {{marginTop:'2rem', marginLeft:'8rem'}}>
                <h4 style = {{fontWeight:'600',cursor:'pointer'}}>
                    Legal
                </h4>
                <t style = {{fontSize:'14px', color:'gray',cursor:'pointer'}}>Terms of Use</t><br/><br/>
                <t style = {{fontSize:'14px',color:'gray',cursor:'pointer'}}>Privacy Policy</t><br/><br/>
            </div>
            <div style = {{marginTop:'2rem', marginLeft:'8rem'}}>
                <h4 style = {{fontWeight:'600',cursor:'pointer'}}>
                    Contact
                </h4>
                <t style = {{fontSize:'14px', color:'gray'}}>Contact: contact@anteelo.com</t><br/><br/>
                <t style = {{fontSize:'14px',color:'gray'}}>Email: support@anteelo.com</t><br/><br/>
                <t style = {{fontSize:'14px',color:'gray'}}>Join Our Facebook Group: Anteelodesign</t><br/><br/>
            </div>  
            <div style = {{marginTop:'2rem', marginLeft:'5rem'}}>
                <h4 style = {{fontWeight:'600',cursor:'pointer'}}>
                    Follow us:
                </h4>
                <img src = {fb} style = {{width:'15px', height:'15px',cursor:'pointer'}}/>
                <img src = {insta} style = {{width:'15px', height:'15px',marginLeft:'1rem',cursor:'pointer'}}/>
                <img src = {twitter} style = {{width:'15px', height:'15px',marginLeft:'1rem',cursor:'pointer'}}/>
            </div>
        </div>
        <div style = {{height:'50px',width:'100%',textAlign:'center',fontSize:'10px',cursor:'pointer',lineHeight:'50px',color:'gray'}}>
                2018 INVENTO LOTS
        </div>
        </div>
    )
}

export default FooterBar;
