import { spawn } from 'child_process';

const command = 'node';
const args = ['index.js'];
const input1 = 'pobi,woni,jun\n';
const input2 = '6\n'
const childProcess = spawn(command, args, {
  stdio: 'pipe',
  shell: true,
});

childProcess.stdin.write(input1);
setTimeout(() => {
    childProcess.stdin.write(input2);
    childProcess.stdin.end();
  }, 500);

childProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

childProcess.stderr.on('data', (data) => {
    console.error(data.toString()); // 출력된 에러 메시지를 콘솔에 표시
  });

childProcess.on('error', (err) => {
  console.error('오류 발생:', err);
});

childProcess.on('close', (code) => {
  console.log('프로세스 종료. 종료 코드:', code);
});