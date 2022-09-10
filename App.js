import {useState, useEffect, useRef} from 'react';
import {styles} from './assets/styles/MyStyles'
import {Text, View, TouchableOpacity,TextInput } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [salario,setSalario] = useState('');
  const [salarios,setSalarios] = useState([]);
  const [montPres, setMontPres] = useState('');
  const [numcuotas, setNumcuotas] = useState('');
  const [valcuota, setValcouta] = useState('');
  const [fecha, setFecha] = useState('')
  const [tipoPres,setTipoPres] = useState('');
  const [totalDeud,setTotaldued] = useState('');
  // Referencias a elementos
  let refNombre = useRef()
  let refMontPres=useRef()
  let refNumcuotas=useRef()
  let refValcuota=useRef()
  let refFecha = useRef()
  let refTipoPres=useRef()
  let refTotalDeud=useRef()
  const guardar = () => {
    //Agregar datos al array a través del método setSalarios para el array salarios
    setSalarios(misalarios => [...misalarios,{nombre:nombre,salario:salario,montPres:montPres,numcuotas:numcuotas,valcuota:valcuota,fecha:fecha,tipoPres:tipoPres,totalDeud}] );
    //console.log(salarios);
    setNombre('');
    setMontPres('')
    setNumcuotas('')
    setValcouta('')
    setFecha('')
    setTipoPres('')
    setTotaldued('')
    setSalario('')
    refNombre.current.focus();
  }
  
  let buscar = (nombuscar) =>{
    let nomenc = salarios.find(sal => sal.nombre == nombre);
    if (nomenc != undefined){
      setSalarios(nomenc.salario);
    }
    else{
      alert("Nombre no hallado");
    }
  }
  let limpiar =()=>{
    setNombre('');
    setMontPres('')
    setNumcuotas('')
    setValcouta('')
    setFecha('')
    setTipoPres('')
    setTotaldued(0)
  }
  return (
    <View style={[styles.container]}>
      <Text style={[{marginBottom:40,textAlign:'center',backgroundColor:'black',color:'white',fontWeight:'bold'}]}>Simulador de créditos</Text>
      
      <View style={[styles.viewChild,{marginTop:10}]}>
      <Text style={[{textAlign:'left'}]}>Nombre:</Text>
      <TextInput
        placeholder='Nombre'      
        onChangeText={nombre => setNombre(nombre)}
        value={nombre}
        ref={refNombre}
      />

      <TextInput
        placeholder='Monto de préstamo'      
        onChangeText={montPres => setMontPres(montPres)}
        value={montPres}
        ref={refMontPres}
      />

      <TextInput
        placeholder='Número de cuotas'      
        onChangeText={numcuotas => setNumcuotas(numcuotas)}
        value={numcuotas}
        ref={refNumcuotas}
      />

      <TextInput
        placeholder='Valor cuota'      
        onChangeText={valcuota => setValcouta(valcuota)}
        value={valcuota}
        ref={refValcuota}
      />
    
      <TextInput
        placeholder='Fecha'      
        onChangeText={fecha => setFecha(fecha)}
        style={{textAlign:'right'}}
        value={fecha}
        ref={refFecha}
      />
      <TextInput
        placeholder='Tipo de Préstamo'      
        onChangeText={tipoPres => setTipoPres(tipoPres)}
        style={{textAlign:'right'}}
        value={tipoPres}
        ref={refTipoPres}
      />
      <TextInput
        placeholder='Total Deuda'      
        onChangeText={totalDeud => totalDeud(totalDeud)}
        style={{textAlign:'right'}}
        value={totalDeud}
        ref={refTotalDeud}
      />

      <TextInput
        placeholder='Salario'      
        onChangeText={salario => setSalario(salario)}
        value={salario}
      /> 
    </View>
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
      <TouchableOpacity
        onPress={guardar}
        style={{backgroundColor:'green',width:70,height:50,borderRadius:10}}
      >
          <Text style={{color:'white', padding:5}}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={buscar}
        style={{backgroundColor:'green',width:70,height:50,marginLeft:10,borderRadius:10}}
      >
          <Text style={{color:'white', padding:5}}>Buscar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={limpiar}
        style={{backgroundColor:'green',width:70,height:50,marginLeft:10,borderRadius:10}}
      >
          <Text style={{color:'white', padding:5}}>Limpiar</Text>
      </TouchableOpacity>

      <Text>{'\n'}</Text>
      </View>
      <View>
      {
          salarios.map(sal => {
            return (
              <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{marginRight:10}}>{sal.nombre}</Text>
                <Text>{new Intl.NumberFormat('es-CO').format(sal.salario)}</Text>
              </View>
            );
          })
        }
        </View>
    </View>
  );
}
