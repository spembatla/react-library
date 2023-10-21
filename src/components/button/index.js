import './styles.scss';
import T from 'prop-types';

const Button = (props) => {
    const { label, variant } = props;
    let _className = null;

    switch (variant) {
        case 'contained':
            _className = 'btn contained';
            break;
        case 'outlined':
            _className = 'btn outlined';
            break;
        default:
            _className = 'btn default'
            break;
    }

    return <button className={_className}>{label}</button>
}

Button.propTypes = {
    variant: T.oneOf(['contained', 'outlined', 'default'])
}

export default Button;