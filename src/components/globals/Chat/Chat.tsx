import { observer } from 'mobx-react-lite';


const ChatDesktop = observer(() => {
  return (
    <div>
      <h1>Десктопная версия чата</h1>
    </div>
  )
})

const ChatMobile = observer(() => {
  return (
    <div>
      Мобильная версия чата
    </div>
  )
})

export default { ChatDesktop, ChatMobile };
