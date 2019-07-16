class Vehicle {
    run(): void { console.log('Vehicle.run'); }
}

class Task {
    run(): void { console.log('Task.run'); }
}

type VehicleType<T> = T & { readonly discriminator: unique symbol };

function runTask(t: VehicleType<Vehicle>) {
    t.run();
}

runTask(VehicleType<new Task()>);
runTask(new Vehicle());