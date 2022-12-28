import PropTypes from 'prop-types'

function Item({ marca, ano }) {
    return (
        <li>{marca} - {ano}</li>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
}

Item.defaultProps = {
    marca: 'A marca não foi cadastrada',
}

export default Item