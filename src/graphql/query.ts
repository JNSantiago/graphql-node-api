import { userQueries } from './resources/user/user.schema'
import { postQueries } from './resources/user/post.schema';

const Query = `
    type Query {
        ${postQueries}
        ${userQueries}
    }
`;

export {
    Query
}