//manipulando variaveis globais do NodeJS
//adicionado o tipo 'testRequest'

declare namespace NodeJS {
    interface Global {
        testRequest: import("supertest").SuperTest<import("supertest").Test>;
    }
}