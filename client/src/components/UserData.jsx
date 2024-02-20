import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// 로컬 스토리지 테스트 컴포넌트
// 관리자 로그인(user, 1111) -> 마이페이지

function UserInfo(props){
    return(
        <div key = {props.id}>
            <p>id: {props.id}</p>
            <p>pswd: {props.pswd}</p>
            <p>이름: {props.name}</p>
        </div>
    )
}

function UserData(props){
    const [cookie] = useCookies(['id']);
    const [localStorageData, setLocalStorageData] = useState(null);
    
    useEffect(() => {
        // 로컬 스토리지의 모든 데이터
        const getAllLocalStorageKeys = () => {
            let data=[];
            for (let i = 1; i < localStorage.length; i++) {
                const localKey = localStorage.key(i);
                data.push({'id': localKey, 'pswd': JSON.parse(localStorage.getItem(localKey)).pswd}) ;
            }
            return data;
        };
    
        // 마운트 실행
        setLocalStorageData(getAllLocalStorageKeys());
    }, []);

    return (
        <div>
            <h3>User Data</h3>
            {localStorageData && localStorageData.map(key => (
                <UserInfo id={key.id} pswd={key.pswd} name={key.name}/>
            ))}
        </div>
    )

}
export default UserData