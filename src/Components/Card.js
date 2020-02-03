import React from 'react'

const Card = (props) => {
    return (
        <div style = {{
                width: '260px', 
                marginRight:'1rem', 
                border:'1px solid gray', 
                paddingBottom:'1rem',
                height:'400px',
                borderRadius:'8px'
            }}>
            <div>
                <div style = {{width: '260px'}}>
                    <div 
                        style = 
                        {{
                            zIndex:'1000',
                            position:'absolute',
                            marginLeft:'1rem',
                            marginTop:'1rem',
                            backgroundColor:'#F7F8F9',
                            borderRadius:'160px',
                            fontSize:'10px',
                            padding:'5px',
                            color:'#0081B5',
                            cursor:'pointer'
                        }}
                    >
                        {props.type}
                    </div>
                    <div 
                        style = {{  
                            zIndex:'1000',
                            position:'absolute',
                            marginLeft:'13rem',
                            marginTop:'1rem',
                            backgroundColor:'rgba(10, 22, 70, 0.10000000149011612)',
                            borderRadius:'160px',
                            fontSize:'10px',
                            padding:'5px',
                            color:'white',
                            cursor:'pointer'
                        }}
                    >
                        {props.views}
                    </div>
                    <img src = {props.src} style = {{width: '260px'}}/>
                </div> 
            </div>
            <div style = {{display:'flex', marginBottom:'1rem'}}>
                <div 
                    style = {{
                        position:'absolute',
                        marginLeft:'1rem',
                        marginTop:'1rem',
                        backgroundColor:'#FDEECB',
                        borderRadius:'100px',
                        fontSize:'10px',
                        padding:'5px',
                        color:'#0081B5',
                        cursor:'pointer'
                    }}
                >
                    {props.auct}
                </div>
                <div
                    style = {{
                        marginLeft:'11rem',
                        marginBottom:'0rem',
                        marginTop:'1rem',
                        fontSize:'12px',
                        padding:'5px',
                        color:'#0081B5',
                        width:'60px',
                        height:'20px',
                        cursor:'pointer'
                    }}
                >
                    { props.days ? props.days : '' }
                </div>
            </div>
            <div style = {{
                    marginLeft:'1rem', 
                    marginRight:'1rem', 
                    fontSize:'14px',
                    fontWeight:'600', 
                    borderBottom:'1px solid gray',
                    paddingBottom:'0.8rem',
                    cursor:'pointer'
                }}>
                {props.desc}
            </div>
            <div style = {{display:'flex',textAlign:'center', justifyContent:'space-between', marginRight:'2rem',marginTop:'1rem'}}>
                <div style = {{textAlign:'center', cursor:'pointer',marginRight:'1rem', marginLeft:'1rem', fontWeight:'600'}}>
                    ${props.cb} <br/>
                    <t style = {{color:'gray',fontSize:'13px'}}>current bid</t> 
                </div>
                <div style = {{textAlign:'center', marginRight:'1rem', cursor:'pointer',fontWeight:'600'}}>
                    <strike>${props.msrp}</strike> <br/>
                    <t style = {{color:'gray',fontSize:'13px'}}>MSRP</t>
                </div>
                <div style = {{textAlign:'center', marginRight:'1rem', cursor:'pointer',fontWeight:'600'}}>
                    {props.unit} <br/>
                    <t style = {{color:'gray', fontSize:'13px'}}>Units</t> 
                </div>
            </div>
            <div style = {{display:'flex', marginTop:'1rem', marginLeft:'1rem', marginRight:'1rem',justifyContent:'space-between'}}>
            <button
                        style = {{
                            backgroundColor: '#00BD76',
                            color:'#FFFFFF',
                            fontFamily: 'Gilroy',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '17px',
                            height:'40px',
                            width: '110px',
                            textAlign: 'center',
                            borderRadius:'4px',
                            border:'1px solid',
                            cursor:'pointer'
                        }}
                    > View Auction</button>
            <button 
                        style ={{
                            backgroundColor: '#FFFFFF',
                            color:'#00BD76',
                            fontFamily: 'Gilroy',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '17px',
                            height:'40px',
                            width: '110px',
                            textAlign: 'center',
                            borderRadius:'4px',
                            border:'1px solid',
                            cursor:'pointer'
                        }}
                    > Watch 
                </button> 
            </div>   
        </div>
    )
}

export default Card;
