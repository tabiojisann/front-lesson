const books = {
    novel: {
      name: ['火花', '赤毛のアン', '星の王子様']
    },

    comic: {
      name: ['鬼滅の刃', 'ONE PIECE', 'キングダム']
    },

    business: {
      name: ['7つの週間', 'サピエンス全史', '自助論']
    },

    philosophy: {
      name: ['方法序説', '死に至る病', 'ニコマコス倫理学']
    },

    biography: {
      name: ['フランクリン自伝', '果てなき野望', 'マイ・ストーリー']
    },

    favorite: {
      name: ['FACTFULLNESS', '蹴りたい背中', '恋は雨上がりのように']
    },
}

const read = books.novel.name.splice(1, 1);

console.log(read + 'を読みました')

const move = books.favorite.name.pop();

books.comic.name.push(move);
books.favorite.name.push(read);

console.log(books);

