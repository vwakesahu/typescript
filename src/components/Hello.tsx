
type NameProp = {
    name: string
}

const Hello = (props: NameProp) => {
  return (
    <div>Hello, {props.name}</div>
  )
}

export default Hello