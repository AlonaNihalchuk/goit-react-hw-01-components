import PropTypes from 'prop-types';
import demoImg from './demo.jpg';

export default function Painting({
  url = demoImg,
  title,
  authorUrl,
  authorName,
  price,
  quantity,
}) {
  // const { url, title, authorUrl, authorName, price, quantity } = props;
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      {/* <p>Доступность: {quantity > 10 ? 'есть в наличии' : 'нет в наличии'}</p> */}

      <p>Доступность: {quantity}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
