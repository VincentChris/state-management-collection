import { useStore } from './store'
import { Radio, RadioGroup } from '@douyinfe/semi-ui'
const RadioOptions = ['All', 'Completed', 'Imcompleted']
function Filter() {
  const { filter, setFilter } = useStore()
  return (
    <RadioGroup
      value={filter}
      onChange={(e) => {
        setFilter(e.target.value)
      }}
    >
      {RadioOptions.map((item) => (
        <Radio value={item} key={item}>
          {item}
        </Radio>
      ))}
    </RadioGroup>
  )
}
export default Filter
