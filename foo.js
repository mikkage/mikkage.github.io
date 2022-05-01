class Foo {
  constructor(f, b) {
    this.f = f;
    this.b = b;
  }
}

func1() {
  f = new Foo('foo', 'bar');
  console.log(f.f);
  console.log(f.b);
}
