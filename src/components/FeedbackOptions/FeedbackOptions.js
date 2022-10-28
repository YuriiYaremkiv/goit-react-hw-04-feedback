import css from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onClick }) => {
  const keys = Object.keys(options);
  return keys.map(key => {
    return (
      <button
        className={css.button}
        key={key}
        onClick={onClick}
        name={key}
      >
        {key}
      </button>
    );
  });
};