import {
    faker
} from '@faker-js/faker';
import {
    onMounted,
    onUnmounted,
    ref
} from 'vue';
export const useFullName = () => {

    const name = ref('');
    const lastName = ref('');
    
    const updateFullName = () => {
        name.value = faker.person.firstName();
        lastName.value = faker.person.lastName();
    
    }
    onMounted(() => {
    
        window.addEventListener('mousemove', updateFullName);
    });
    onUnmounted(() => {
        updateFullName()
    });
    return {
        name,
        lastName
    }
}