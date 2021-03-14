import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top(){
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div style={{flex: '100px 0 0'}}>
                    {/* 로봇이나 html 파일 사용가능 */}
                    <img 
                        src='/images/Liverpool.png' 
                        alt='logo'
                        style={{display: 'block', width: 80}}
                    />
                </div>
                <Header as='h1'>코딩앙마</Header>
            </div>
            <Gnb />
        </div>
    );
}