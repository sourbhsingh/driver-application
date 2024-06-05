import { CardNotificationProps } from './Interface';
/**
 * CardNotification component.
 *
 * This component renders a notification card with a title, message, and a redirect button.
 *
 * @param {CardNotificationProps} props - The properties for the component.
 * @param {string} props.notificationTitle - The title of the notification.
 * @param {string} props.notificationMessage - The message content of the notification.
 * @param {string} props.notificationRedirectButton - The label for the redirect button.
 *
 * @returns {JSX.Element} The rendered notification card.
 *
 * @example
 * // Usage example:
 * import React from 'react';
 * import CardNotification from './CardNotification';
 *
 * const App = () => (
 *   <div>
 *     <CardNotification
 *       notificationTitle="Update Available"
 *       notificationMessage="A new update is available for download."
 *       notificationRedirectButton="Download Now"
 *     />
 *   </div>
 * );
 *
 * export default App;
 */
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
