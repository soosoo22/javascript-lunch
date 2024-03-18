const NameValidator = {
    empty(name) {
        if (name.length <= 0) {
            throw new Error('이름을 입력하세요.');
        }
    },
};
export default NameValidator;
