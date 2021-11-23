import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'test@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'jeon',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'test',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}

// 인터페이스는 타입스크립트에만 타입스크립트 컴파일이 끝나면 사라져 버린다.
// 근데 클래스는 실제 자바스크립트로 바뀐 후에도 남아있다. 그래서 클래스에서 인터페이스의 역할도 하면서
// 자바스크립트로 바뀐 후에도 js단에서도 타입검증 validation수행가능
