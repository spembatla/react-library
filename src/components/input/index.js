import './styles.scss';
import T from 'prop-types';

const Textfield = (props) => {
    const {label, variant} = props;
    let _className = null;

    switch (variant) {
        case 'filled':
            _className= 'filled';
            
            break;
        case 'standard':
            _className = 'standard';
            break;
    
        default:
            _className = 'default';
            break;
    }

    return <input type='text' className={_className} placeholder={label}></input>
}

Textfield.propTypes = {
    variant: T.oneOf(['filled', 'standard', 'default'])
}

export default Textfield;