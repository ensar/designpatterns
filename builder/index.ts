class Laptop {
  public name = '';
  public memory = 0;
  public RAM = 0;
}

// Builder
abstract class LaptopBuilder {
  public abstract setName(): unknown;
  public abstract setMemory(): unknown;
  public abstract setRAM(): unknown;
  public abstract getLaptop(): Laptop;
}

// Director
class LaptopDirector {
  constructor(private laptopBuilder: LaptopBuilder) {}

  public getLaptop(): Laptop {
    return this.laptopBuilder.getLaptop();
  }

  public create() {
    this.laptopBuilder.setName();
    this.laptopBuilder.setMemory();
    this.laptopBuilder.setRAM();
  }
}

// ConcreteBuilder
class MacbookConcreteBuilder extends LaptopBuilder {
  public laptop: Laptop = new Laptop();

  public override setName() {
    this.laptop.name = 'Macbook Pro';
  }
  public override setMemory() {
    this.laptop.memory = 512;
  }
  public override setRAM() {
    this.laptop.RAM = 16;
  }
  public override getLaptop(): Laptop {
    return this.laptop;
  }
}

const MacbookBuilder = new MacbookConcreteBuilder();
const laptop = new LaptopDirector(MacbookBuilder);
laptop.create();
//console.log(laptop.getLaptop());
