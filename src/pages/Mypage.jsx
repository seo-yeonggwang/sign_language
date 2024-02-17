import styled from 'styled-components';
import UserData from '../UserData';
import { useCookies } from 'react-cookie';

function Mypage(props){
    const [cookie] = useCookies(['id']);

    if (cookie.id==="user"){
        return (
            <UserData/>
        )
    }
    
    return (
        <h1>마이페이지</h1>
    )
}
export default Mypage