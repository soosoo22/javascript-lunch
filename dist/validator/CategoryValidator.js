import Condition from '../constants/Condition';
const { CATEGORY } = Condition;
const CategoryValidator = {
    empty(category) {
        if (category.length <= 0)
            throw new Error('카테고리 입력은 필수입니다.');
    },
    exist(category) {
        const categories = Object.values(CATEGORY).map(String);
        if (!categories.includes(category)) {
            throw new Error('존재하지 않는 카테고리입니다. 당신 어느 나라 사람인가요?');
        }
    },
};
export default CategoryValidator;
const person = {
    name: '쑤쑤',
    age: 26,
};
person.name = '쿠키';
console.log(person);
