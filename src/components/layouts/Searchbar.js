import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { searchCountry, clearCountry } from '../../actions/countryActions'

const Searchbar = ({ searchCountry, clearCountry, country: { filtered } }) => {

    const text = useRef('');

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    })

    const onChange = e => {
        if(text.current.value !== ''){
            searchCountry(text.current.value);
        }
        else{
            clearCountry();
        }
        
    }

    return (
        <nav style={{ marginBottom: '30px'}} className='blue'>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder='Search Logs' ref={text} onChange={onChange} required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons" onClick={clearCountry}>close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

Searchbar.propTypes = {
    searchCountry: PropTypes.func.isRequired,
    clearCountry: PropTypes.func.isRequired,
    country: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    country: state.country
})

export default connect(mapStateToProps, { searchCountry, clearCountry })(Searchbar)
