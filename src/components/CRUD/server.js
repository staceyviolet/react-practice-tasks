const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

const notes = [{
    id: 0,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida magna eu ipsum gravida, vitae pulvinar felis vulputate. Nullam euismod mi eu mauris pulvinar, sit amet tempus quam interdum. Aliquam id viverra enim. Etiam et dolor quis nulla vestibulum ultricies. Suspendisse tincidunt porta enim a eleifend. Maecenas eget risus nec leo" +
        " tempor elementum. Sed varius ut nisi et vulputate. Aenean sollicitudin magna et dolor fermentum ia"
}];
let nextId = 1;

const router = new Router();

router.get('/notes', async (ctx, next) => {
    ctx.response.body = notes;
});

router.post('/notes', async(ctx, next) => {
    notes.push({...ctx.request.body, id: nextId++});
    ctx.response.status = 204;
});

router.delete('/notes/:id', async(ctx, next) => {
    const noteId = Number(ctx.params.id);
    const index = notes.findIndex(o => o.id === noteId);
    if (index !== -1) {
        notes.splice(index, 1);
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7778;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));
