import { userQueries } from './resources/user/user.schema'
import { postQueries } from './resources/user/post.schema';
import { commentQueries } from './resources/user/comment.schema';

const Query = `
    type Query {
        ${commentQueries}
        ${postQueries}
        ${userQueries}
    }
`;

export {
    Query
}