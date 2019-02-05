import { userMutations } from './resources/user/user.schema'
import { postMutations } from './resources/user/post.schema';
import { commentMutations } from './resources/user/comment.schema';

const Mutation = `
    type Mutation {
        ${commentMutations}
        ${postMutations}
        ${userMutations}
    }
`;

export {
    Mutation
}