import React from 'react';
import inventoLogo from '../Group 4.svg';

const HeaderBar = () => {
    return (
        <div style = {{
            display:'flex',
            height:'72px',
            lineHeight:'72px',
            boxShadow:'5px 5px 5px gray',
            justifyContent:'space-between',
        }}>
            <div
                style = {{
                    padding:'0rem',
                    width:'15rem'
                }}
            >
                <img style = {{ marginLeft:'104px', marginTop:'1.5rem', cursor:'pointer' }} src = {inventoLogo}>
                </img>
            </div>
                <div 
                    style = {{
                        borderRadius: '4px',
                        width: '450px',
                        height:'40px',
                        marginTop:'1rem',
                        lineHeight:'40px',
                        border:'1px solid white',
                        backgroundColor:'#E1E4E8',
                        fontFamily:'Gilroy',
                        fontSize:'14px'
                    }}
                >
                    <input
                        type = 'text'
                        placeholder = 'Search Something'
                        style = {{
                            color: '#8A94A6',
                            fontFamily: 'Gilroy',
                            fonSize: '14px',
                            fontWeight: '500',
                            lineHeight: '17px',
                            width: '400px',
                            texAlign: 'left',
                            border:'none',
                            height:'24px',
                            backgroundColor:'#E1E4E8',
                            marginLeft:'3rem'
                        }}
                    />
                </div>
                <div>
                    <button 
                        style ={{
                            backgroundColor: '#FFFFFF',
                            color:'#00BD76',
                            fontFamily: 'Gilroy',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '17px',
                            height:'40px',
                            width: '96px',
                            textAlign: 'center',
                            borderRadius:'4px',
                            marginRight:'1rem',
                            border:'1px solid',
                            cursor:'pointer'
                        }}
                    > Sign In </button> 
                    <button
                        style = {{
                            backgroundColor: '#00BD76',
                            color:'#FFFFFF',
                            fontFamily: 'Gilroy',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '17px',
                            height:'40px',
                            width: '96px',
                            textAlign: 'center',
                            borderRadius:'4px',
                            marginRight:'5rem',
                            border:'1px solid',
                            cursor:'pointer'
                        }}
                    > Sign Up</button>
                </div>
        </div>
    )
}

export default HeaderBar;
