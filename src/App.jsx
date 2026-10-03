const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        name={props.parts[0].name}
        exercises={props.parts[0].exercises}
      />

      <Part
        name={props.parts[1].name}
        exercises={props.parts[1].exercises}
      />

      <Part
        name={props.parts[2].name}
        exercises={props.parts[2].exercises}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = 'INDUSTRY ELECTIVE 1'

  const parts = [
    {
      name: 'IT317 Project Management IN INFORMATION TECHNOLOGY - ',
      exercises: 3
    },
    {
      name: 'CSIT327 Information Management 2 - ',
      exercises: 3
    },
    {
      name: 'IT365 Data Analytics 1 - ',
      exercises: 3
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App

