export interface IAbout {
  test: string
}

const About: React.FC<IAbout> = ({ test }) => {
  return <div>Its a {test} Component</div>
}

export default About
