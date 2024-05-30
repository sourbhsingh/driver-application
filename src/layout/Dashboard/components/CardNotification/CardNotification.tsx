import { CardNotificationProps } from './Interface';

function CardNotification(props: CardNotificationProps) {
  const { notificationTitle, notificationMessage, notificationRedirectButton } =
    props;
  return (
    <div className='card w-96 bg-primary text-primary-content shadow-lg'>
      <div className='card-body'>
        <h2 className='card-title'>{notificationTitle}</h2>
        <p>{notificationMessage}</p>
        <div className='card-actions justify-end'>
          <button className='btn '>{notificationRedirectButton}</button>
        </div>
      </div>
    </div>
  );
}
export default CardNotification;
