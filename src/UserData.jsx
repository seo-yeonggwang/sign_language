import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// 로컬 스토리지 테스트 컴포넌트
// 관리자 로그인(user, 1111) -> 마이페이지
function UserData(props){
    const [cookie] = useCookies(['id']);
    const [localStorageData, setLocalStorageData] = useState(null);
    
    useEffect(() => {
        // 로컬 스토리지에서 모든 키를 가져오는 함수
        const getAllLocalStorageKeys = () => {
            const keys = [];
            for (let i = 1; i < localStorage.length; i++) {
                keys.push(localStorage.key(i));
            }
            return keys;
        };
    
        // 모든 로컬 스토리지 데이터를 가져오는 함수
        const getAllLocalStorageData = () => {
            const data = {};
            const keys = getAllLocalStorageKeys();
            keys.forEach(key => {
                data[key] = localStorage.getItem(key);
            });
            return data;
        };
    
        // 컴포넌트가 마운트될 때 실행
        setLocalStorageData(getAllLocalStorageData());
    }, []);

    return (
        <div>
            <h3>User Data</h3>
            {localStorageData && Object.keys(localStorageData).map(key => (
                <div key={key}>
                    <p>ID: {key}</p>
                    <p>{localStorageData[key]}</p>
                </div>
            ))}
        </div>
    )

}
export default UserData