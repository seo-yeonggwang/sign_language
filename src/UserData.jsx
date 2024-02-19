import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// 로컬 스토리지 테스트 컴포넌트
// 관리자 로그인(user, 1111) -> 마이페이지
function UserData(props){
    const [cookie] = useCookies(['id']);
    const [localStorageData, setLocalStorageData] = useState(null);
    
    useEffect(() => {
        // 로컬 스토리지의 모든 데이터
        const getAllLocalStorageKeys = () => {
            const data={};
            for (let i = 1; i < localStorage.length; i++) {
                const localKey = localStorage.key(i);
                data[localKey] = localStorage.getItem(localKey);
            }
            return data;
        };
    
        // 마운트 실행
        setLocalStorageData(getAllLocalStorageKeys());
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