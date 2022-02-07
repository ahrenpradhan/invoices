export function read(callback) {
  let values = [];

  fs.readFile(
    path.resolve(__dirname, './files/test.txt'),
    'utf-8',
    (err, data) => {
      if (err) throw err;
      values = data.toString().split('\n');

      const listItems = values.map((val) => <p>{val}</p>);
      return callback(listItems);
    }
  );
}
