import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModal';
import Clients from '../components/Clients';
import AddProjectModal from '../components/AddProjectModal';

const Home = () => {
  return (
    <>
        <Projects />
        <AddProjectModal />
        <AddClientModal />
        <Clients />
    </>
  )
}

export default Home