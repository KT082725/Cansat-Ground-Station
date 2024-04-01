import serial
import random
import time

# Define the serial port and baud rate
serial_port = "COM1"  # Change this to match your serial port
baud_rate = 115200

# Open the serial port
ser = serial.Serial(serial_port, baud_rate, timeout=1)

try:
    while True:
        # Generate random data for telemetry
        packetCount = random.uniform(0, 100)
        mode = random.randint(0, 255)
        state = random.randint(0, 255)
        altitude = random.uniform(0, 10000)
        temperature = random.uniform(-20, 50)
        pressure = random.uniform(800, 1200)
        voltage = random.uniform(3, 5)
        gpsTime = random.uniform(0, 24)
        gpsLatitude = random.uniform(-90, 90)
        gpsLongitude = random.uniform(-180, 180)
        gpsSats = random.randint(0, 12)
        tiltX = random.uniform(-90, 90)
        tiltY = random.uniform(-90, 90)
        rotZ = random.uniform(0, 360)

        # Create a string of telemetry data
        telemetry_data = f"{packetCount} {mode} {state} {altitude} {temperature} {pressure} {voltage} {gpsTime} {gpsLatitude} {gpsLongitude} {gpsSats} {tiltX} {tiltY} {rotZ}\n"

        # Send the telemetry data over the serial port
        ser.write(telemetry_data.encode())

        # Print the sent telemetry data
        print("Sent telemetry data:", telemetry_data)

        # Wait for 1 second
        time.sleep(1)

except KeyboardInterrupt:
    print("Stopping script...")
    ser.close()
