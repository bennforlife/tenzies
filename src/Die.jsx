export default function Die({ id, value, isHeld, holdDie }) {
  const styles = {
    backgroundColor: isHeld ? '#59E391' : '#FFF',
  }

  return (
    <div className="die" style={styles} onClick={() => holdDie(id)}>
      {value}
    </div>
  )
}
