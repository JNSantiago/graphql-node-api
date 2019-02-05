import { userMutations } from './resources/user/user.schema'
import { postMutations } from './resources/user/post.schema';

const Mutation = `
    type Mutation {
        ${postMutations}
        ${userMutations}
    }
`;

export {
    Mutation
}