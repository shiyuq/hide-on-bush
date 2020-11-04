'use strict';

/**
 * @typedef {import('koa').Next} Next
 */
module.exports = () => {
  /**
   * @param {Minerva.Context} ctx - Context of Minerva API framework
   * @param {Next} next - koa next function
   */
  const middleWare = async function auth(ctx, next) {
    const token = ctx.request.authKey || 'Bearer ';
    if (!token) {
      ctx.throw(401, ctx.__('Token does not exist.'));
    }
    try {
      const secret = '';
      const credentials = await ctx.app.jwt.verify(token.substr(7), secret);
      if (!credentials) {
        ctx.throw(401, ctx.__('Token invalid or expired.'));
      }
    } catch (e) {
      return null;
    }
    await next();
  };
  return middleWare;
};
