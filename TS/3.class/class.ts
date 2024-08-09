/*
    클래스 정의 : 
    - 속성 및 기능의 집합을 정의
*/
class Sample1 {
    field: string;

    constructor(field: string) {
        this.field = field;
    };

    method(arg: string): void {

    }
};


console.log('==================================================');

/*
    접근제어자
    - public : 클래스 내부, 자식 클래스 내부, 모든 위치
    - protected : 클래스 내부, 자식 클래스
    - private : 클래스 내부
    - TypeScript는 패키지라는 개념이 없기 때문에 '기본값은 public'으로 지정
*/
class Sample2 {
    public publicField: string;
    protected protectedField: string;
    private privateField: string;

    constructor() {
        this.publicField = '퍼블릭';
        this.protectedField = '프로텍티드';
        this.privateField = '프라이빗';
    }
}
const sample2Instance = new Sample2();
sample2Instance.publicField;
// sample2Instance.protectedField; - error
// sample2Instance.privateField; - error


console.log('==================================================');

/*
    생성자 매개변수에 접근 제어자 지정
    - 생성자의 매개변수에 '접근 제어자를 지정'해서 '필드 선언 가능'
*/
class Sample3 {

    constructor(
        public publicField: string,
        protected protectedField: string,
        private privateField: string,
        localVariable: string // 접근 제어자를 안 쓰면 그냥 매개변수
    ) {}
}


console.log('==================================================');

/*
    readonly :
    - readonly가 선언된 클래스 속성은 '선언' 시 또는 '생성자 내부'에서만 '값을 할당'할 수 있음
    - 값을 재할당 할 수 없고 오직 읽기만 가능
    - 상수 선언에 사용
*/
class Sample4 {
    public readonly field1: string = '읽기 전용 1';
    public readonly field2: string;

    constructor(
        field2: string,
        public readonly field3: string 
        // 생성자에서 필드를 선언할 때에는 따로 아래처럼 안 써도 인스턴스 생성 시에 값 할당 가능
    ) {
        this.field2 = field2;
    }

    setMethod() {
        // this.field1 = '변경'; - error
    }
}

const sample4Instance = new Sample4('읽기 전용 2', '읽기 전용 3');
console.log(sample4Instance);
// sample4Instance.field1 = '변경'; - error


console.log('==================================================');

/*
    추상 클래스 :
    - '하나 이상의 추상 메서드를 포함'하는 클래스, abstract 키워드로 선언
*/
abstract class AbstractClass {
    abstract abstractMethod(arg: string): void;
}

class SubClass extends AbstractClass {
    abstractMethod(arg: string): void {

    };
}


console.log('==================================================');