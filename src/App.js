import './App.css';
import ProfileComponent from './Profile/ProfileComponent';



function App() {
  const data= { fullName :'Nice Person', bio:'Cool life',profession:'Teacher' }
  let handleName=(x)=>{alert(` the name is ${x}`)}
  return (
    <div className="App">
     <ProfileComponent data={data} handleName={handleName}>
      
     <img src='https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg?w=2000' height={500} width={400}
          alt='teacherphoto' ></img>

      </ProfileComponent>


    </div>
  );
}

export default App;
