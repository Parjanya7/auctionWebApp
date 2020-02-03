import React from 'react';
import ReactSelect from 'react-select';
import checked from '../checked.svg';
import unchecked from '../Unchecked.svg';

const SideBar = () => {

    const styleForSelect = {

        menu: () => ({width:'100px', overFlowx:'auto'}),
        dropdownIndicator: () => ({marginLeft:'0rem'}),
        container: () => ({ width:'150px', marginLeft:'0rem',marginRight:'0.5rem',overFlowx:'auto'})
    };

    return (
        <div 
            style = {{ 
                marginTop:'2rem', 
                marginLeft:'100px', 
                width:'230px'
            }}
        >
            <div 
                style = {{ 
                    borderBottom:'0.5px solid gray', 
                    width:'230px', 
                    textAlign:'left',
                    display: 'inline-block',
                    paddingBottom:'0.5rem',
                    marginBottom:'0rem'
                }}
            >
                <h2
                    style = {{ float:'left', marginBottom:'0rem', fontWeight:'500', fontFamily:'Gilroy',fontSize:'24px'}}
                > Filter </h2>
                <h3
                    style = {{float:'right', marginBottom:'0rem',marginTop:'1.5rem', fontSize:'16px', color:'#00B16E', cursor:'pointer'}} 
                >
                    clear
                </h3>
            </div> <br/>
            <div style = {{marginBottom:'-0.8rem'}}>   
                <h3
                    style = {{ width:'33px', height:'14px', color:'#4E5D78', fontSize:'16px', fontWeight:'600'}}
                >
                    PRICE
                </h3>
                <div style = {{display:'flex'}}>
                    <ReactSelect
                        placeholder = '$ Min'
                        styles = {styleForSelect}
                    />
                    <ReactSelect
                        placeholder = '$ Max'
                        styles = {styleForSelect}
                    />
                </div>
            </div><br/>
            <div>
                <div style = {{ display:'flex',borderBottom:'0.5px solid gray',paddingBottom:'0rem'}}>
                    <h3
                        style = {{ height:'20px', color:'#4E5D78', fontSize:'14px', fontWeight:'600', marginBottom:'0.3rem'}}
                    >
                        LOCATION (USA)
                    </h3>
                </div><br/>
                <div>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {checked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem'}}>West</t> </div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {unchecked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem', color:'gray'}}>Midwest</t> </div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {checked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem'}}>Southeast</t> </div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {unchecked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem', color:'gray'}}>Northeast </t></div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {checked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem'}}>Southwest </t></div><br/>
                </div>
            </div>
            <div>
                <div style = {{ display:'flex',borderBottom:'0.5px solid gray',paddingBottom:'0rem'}}>
                    <h3
                        style = {{ height:'20px', color:'#4E5D78', fontSize:'14px', fontWeight:'600', marginBottom:'0.3rem'}}
                    >
                        MSRP Percent Off    
                    </h3>
                </div><br/>
                <div>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {checked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem'}}>0-20 %</t> </div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {unchecked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem', color:'gray'}}>20-50 %</t> </div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {unchecked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem',color:'gray'}}>50-80 % </t></div><br/>
                </div>
            </div>
            <div>
                <div style = {{ display:'flex',borderBottom:'0.5px solid gray',paddingBottom:'0rem'}}>
                    <h3
                        style = {{ height:'20px', color:'#4E5D78', fontSize:'14px', fontWeight:'600', marginBottom:'0.3rem'}}
                    >
                        CONDITION
                    </h3>
                </div><br/>
                <div>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {checked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem'}}>New</t> </div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {unchecked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem', color:'gray'}}>Like New</t> </div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {checked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem'}}>Uninspecte Returns</t></div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {checked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem'}}>Used </t></div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {unchecked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem'}}>Salvage </t></div><br/>
                        <div style = {{display:'flex', marginBottom:'-1rem'}}><img src = {unchecked} style = {{cursor:'pointer'}}/><t style = {{fontFamily:'Gilroy', fontWeight:'500', marginLeft:'1rem', color:'gray'}}>Mixed </t></div><br/>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
